import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // validation simple : besoin que ts les champs soit remplis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    //  envoi email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", 
      to: ["meftah.yasmine2006@gmail.com"], // mon email
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: `
        <h2>Nouveau message depuis mon portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Erreur contact:", error);

    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message." },
      { status: 500 }
    );
  }
}