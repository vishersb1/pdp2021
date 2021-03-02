const sgMail = require("@sendgrid/mail");
class SendGrid {
  static initialize() {
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
  }

  static sendMessage({ to, subject, text, html }) {
    const message = {
      to,
      from: "vishersb@gmail.com",
      subject,
      text: "Hello from sendgrid",
      html: html,
    };
    sgMail
      .send(message)
      .then((res) => console.log(`Email sent`))
      .catch((error) => console.log(error.message));
  }
}

module.exports = {
  SendGrid,
};
