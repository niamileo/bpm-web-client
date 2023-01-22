import ArrowRight from "components/SVG/ArrowRight.svg";
import ArrowLeft from "components/SVG/ArrowLeft.svg";

export default function DatatablePagination() {
  return (
    <>
      <p className="m-0 text-muted">
        Showing <span>1</span> to <span>8</span> of <span>16</span> entries
      </p>
      <ul className="pagination m-0 ms-auto">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
            <ArrowLeft />
            prev
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            next <ArrowRight />
          </a>
        </li>
      </ul>
    </>
  );
}
