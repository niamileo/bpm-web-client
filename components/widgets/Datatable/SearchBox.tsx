export default function DatatableSearchBox() {
  return (
    <div className="ms-auto text-muted">
      Search:
      <div className="ms-2 d-inline-block">
        <input
          type="text"
          className="form-control form-control-sm"
          aria-label="Search invoice"
        />
      </div>
    </div>
  );
}
