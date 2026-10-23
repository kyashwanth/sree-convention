const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const CONTACT_EMAIL = "info@example.com";

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
function setNav(open) {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
toggle.addEventListener("click", () => setNav(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => { if (e.target.closest("a")) setNav(false); });

document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.querySelector(".lightbox");
const lbImg = lightbox.querySelector("img");
document.querySelectorAll(".g-item").forEach((item) => {
  item.addEventListener("click", () => {
    lbImg.src = item.dataset.full;
    lbImg.alt = item.dataset.alt;
    lightbox.showModal();
  });
});
lightbox.querySelector(".lb-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });

const form = document.getElementById("enquiry-form");
const status = form.querySelector(".form-status");
const dateInput = form.elements.date;
dateInput.min = new Date().toISOString().slice(0, 10);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = form.elements;
  let valid = true;
  [f.name, f.phone, f.type].forEach((field) => {
    const bad = !field.value.trim();
    field.classList.toggle("invalid", bad);
    if (bad) valid = false;
  });
  if (!valid) {
    status.textContent = "Please fill in your name, phone number and event type.";
    return;
  }

  const lines = [
    "Hello Sree Convention, I'd like to check availability.",
    `Name: ${f.name.value.trim()}`,
    `Phone: ${f.phone.value.trim()}`,
    `Event: ${f.type.value}`,
    f.date.value && `Date: ${f.date.value}`,
    f.guests.value && `Guests: ${f.guests.value}`,
    f.message.value.trim() && `Message: ${f.message.value.trim()}`,
  ].filter(Boolean);
  const text = lines.join("\n");

  const hasWhatsApp = /^\d{10,15}$/.test(WHATSAPP_NUMBER);
  const url = hasWhatsApp
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Venue enquiry")}&body=${encodeURIComponent(text)}`;

  status.textContent = hasWhatsApp ? "Opening WhatsApp…" : "Opening your email app…";
  window.open(url, hasWhatsApp ? "_blank" : "_self", "noopener");
});
form.addEventListener("input", (e) => e.target.classList.remove("invalid"));
