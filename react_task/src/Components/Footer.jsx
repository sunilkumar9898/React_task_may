import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

const Footer = () => {
    const form = useRef();
    const toast = useToast();
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (email === "") {
    alert("please enter email")
            return;
        }

        emailjs
            .sendForm("service_9pj3vyk", "template_upz28vs", form.current, {
                publicKey: "kxrIi2bxDjEGllK6r",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
            alert("success !")
                    form.current.reset();
                    setEmail("");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    toast({
                        title: "Email failed.",
                        position: "top-right",
                        description: "Failed to send email. Please try again.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                }
            );
    };

    return (
        <div className="footer">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li>
                                    <a href="#">about us</a>
                                </li>
                                <li>
                                    <a href="#">our services</a>
                                </li>
                                <li>
                                    <a href="#">privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">affiliate program</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">shipping</a>
                                </li>
                                <li>
                                    <a href="#">returns</a>
                                </li>
                                <li>
                                    <a href="#">order status</a>
                                </li>
                                <li>
                                    <a href="#">payment options</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>School</h4>
                            <ul>
                                <li>
                                    <a href="#">watch</a>
                                </li>
                                <li>
                                    <a href="#">bag</a>
                                </li>
                                <li>
                                    <a href="#">shoes</a>
                                </li>
                                <li>
                                    <a href="#">dress</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="email_footer">
                        <form action="" ref={form} onSubmit={sendEmail}>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                name="from_email"
                                value={email}
                                onChange={handleChange}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
