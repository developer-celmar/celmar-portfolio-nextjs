export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  return Response.json(
    {
      ok: true,
      message:
        "Contact form scaffold received the submission. Connect this route to Resend, Nodemailer, or another mail service before production use.",
      payload,
    },
    { status: 200 }
  );
}
