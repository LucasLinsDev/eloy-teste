import axios from "axios";
export function Table() {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr></tr>
          <tr>
            <button className="btn btn-primary">Save</button>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
