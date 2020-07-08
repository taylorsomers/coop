export function sendEmail(userEmail) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "cpartnership@gmail.com",
	Password : "epicodus",
	To : userEmail,
	From : "cpartnership@gmail.com",
	Subject : "Thank You for Creating a Co-Op with us!",
	Body : `Heres some juicy details about starting a Co-Op, heres info about your state`,
	}).then(
		message => alert("mail sent successfully")
	);
}