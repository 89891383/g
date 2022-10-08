import React from "react";
import * as button from "@atoms/Button/Button.module.scss";

import Section from "@templates/SectionTemplate/SectionTemplate";
import FormField from "@atoms/FormField/FormField";

const Contact = () => {
   const [email, setEmail] = React.useState("");
   const [name, setName] = React.useState("");
   const [message, setMessage] = React.useState("");

   return (
      <Section title={"Get in touch"}>
         {/* TODO: Advanced form vaidation */}
         <form method="GET" data-netlify="true">
            <FormField
               label="E-Mail"
               type="email"
               placeholder="e.g. revku@revku.dev"
               value={email}
               setValue={setEmail}
            />

            <FormField
               name="Name"
               label="Name / Nickname"
               type="email"
               placeholder="e.g. Revku"
               value={name}
               setValue={setName}
            />

            <FormField
               label="Message"
               type="email"
               placeholder="Your message"
               value={message}
               setValue={setMessage}
               isArea
            />

            {/* TODO Button component */}
            <button className={button.button} type="submit">
               Send Message
            </button>
         </form>
      </Section>
   );
};

export default Contact;
