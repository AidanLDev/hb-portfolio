import * as React from "react";

export interface props {}

export const ContactMe: React.FC<props> = (): JSX.Element => (
  <div id="contact-me">
    <h1>Contact Me</h1>
    <label>Name</label>
    <input></input>
    <label>Email</label>
    <input></input>
    <label>Query</label>
    <textarea rows={5}></textarea>
  </div>
);
