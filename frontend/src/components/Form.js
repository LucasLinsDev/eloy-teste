import { useState } from "react";
export function Form() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />
      </div>
    </form>
  );
}
