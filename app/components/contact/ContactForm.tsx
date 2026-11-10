import { useState, type FormEvent, type ReactNode } from "react";

import { useI18n } from "~/i18n";
import { CONTACT_EMAIL } from "~/lib/site";

import { Button } from "../ui/Button";

// Web3Forms erişim anahtarı derleme sırasında .env dosyasından (yerelde) veya
// GitHub secret'ından (yayında) okunur; kodun içine yazılmaz.
// Anahtar yoksa form, ziyaretçinin e-posta uygulamasını mesaj hazır şekilde açar.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const ENDPOINT = "https://api.web3forms.com/submit";

type State = "idle" | "sending" | "success" | "error";

/** İletişim formu: ad, e-posta, konu ve mesaj. */
export function ContactForm() {
  const { t } = useI18n();
  const f = t.pages.contact.form;
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Spam botları görünmez "botcheck" kutusunu doldurur; insanlar görmez.
    if (data.get("botcheck")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!ACCESS_KEY) {
      const body = `${message}\n\n— ${name} <${email}>`;
      const mailSubject = subject || f.mailSubject;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `${f.mailSubject}${subject ? `: ${subject}` : ""}`,
          from_name: "MehPiX",
          name,
          email,
          message,
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (res.ok && json.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const sending = state === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={f.name} htmlFor="ad">
          <input id="ad" name="name" type="text" required maxLength={100} autoComplete="name" className={INPUT} />
        </Field>
        <Field label={f.email} htmlFor="eposta">
          <input
            id="eposta"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={INPUT}
          />
        </Field>
      </div>
      <Field label={f.subject} htmlFor="konu">
        <input id="konu" name="subject" type="text" maxLength={150} className={INPUT} />
      </Field>
      <Field label={f.message} htmlFor="mesaj">
        <textarea id="mesaj" name="message" required rows={6} maxLength={5000} className={`${INPUT} resize-y`} />
      </Field>

      {/* Bot tuzağı: ekranda ve ekran okuyucularda görünmez */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? f.sending : f.send}
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {state === "success" && <span className="text-success">{f.success}</span>}
          {state === "error" && <span className="text-warning">{f.error}</span>}
        </p>
      </div>
      <p className="text-xs text-muted">{ACCESS_KEY ? f.noteService : f.noteMail}</p>
    </form>
  );
}

const INPUT =
  "block w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/60 transition-colors hover:border-accent/40 focus:border-accent focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/30";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-fg">
        {label}
      </label>
      {children}
    </div>
  );
}
