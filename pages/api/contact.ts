import type { NextApiRequest, NextApiResponse } from "next";
import isValidBody from "../../utils/typeGuard";
import { MessageBuilder, Webhook } from "discord-webhook-node";

export type Request = {
  name: string;
  discordID: string;
  email: string;
  message: string;
};

interface Response {
  error?: string;
  success: boolean;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  // TODO: implement discord webhook
  // TODO: implement env variable

  if (req.method !== "POST") {
    res
      .status(405)
      .json({ error: "Only POST requests allowed", success: false });
    return;
  }

  if (
    !isValidBody<Request>(req.body, ["name", "discordID", "email", "message"])
  ) {
    res.status(400).json({ error: "Invalid body", success: false });
    return;
  }

  const { name, discordID, email, message } = req.body;

  const hook = new Webhook(process.env.WEBHOOK_URL);
  const embed = new MessageBuilder()
    .setTitle("New Contact Form Submission")
    .addField("Name", name)
    .addField("Discord ID", discordID)
    .addField("Email", email)
    .addField("Message", message)
    .setTimestamp();

  hook.send(embed);
  res.redirect(301, "/contactsuccess");
}
