import { Heading } from "@chakra-ui/react";
import * as React from "react";
import { Socials } from "./Socials";

export interface props {}

export const ContactMe: React.FC<props> = (): JSX.Element => (
  <div id="contact-me">
    <Heading p="20px 0">Contact Me</Heading>
    <label>Name</label>
    <input></input>
    <label>Email</label>
    <input></input>
    <label>Query</label>
    <textarea rows={5}></textarea>
    <Socials />
  </div>
);
