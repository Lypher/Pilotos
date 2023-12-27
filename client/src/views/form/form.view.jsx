import React from "react";
import { useState } from "react";

export default function Form() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="surname">Surname</label>
      <input type="text" name="surname" />
      <label htmlFor="nationality">Nationality</label>
      <input type="text" name="nationality" />
      <label htmlFor="image">Image</label>
      <input type="image" name="image" />
      <label htmlFor="dob">Date of birth</label>
      <input type="text" name="dob" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" />
      <label htmlFor="teams">Teams</label>
      <input type="text" name="teams" />
    </form>
  );
}
