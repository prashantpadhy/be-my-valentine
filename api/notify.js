export default async function handler(req, res) {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Valentine 💖 <onboarding@resend.dev>",
      to: "padhyprashantpadhy21@gmail.com",
      subject: "She said YES 💘",
      html: "<h2>💖 Asmita clicked YES!</h2><p>This is your Valentine confirmation 💌</p>"
    })
  });

  res.status(200).json({ success: true });
}
