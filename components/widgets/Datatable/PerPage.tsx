export default function DatatablePerPage() {
  return (
    <div className="text-muted">
      Show
      <div className="mx-2 d-inline-block">
        <input
          type="text"
          className="form-control form-control-sm"
          value="8"
          size={3}
          aria-label="Invoices count"
        />
      </div>
      entries
    </div>
  );
}
