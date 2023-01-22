import DatatablePagination from "./Pagination";
import DatatablePerPage from "./PerPage";
import DatatableSearchBox from "./SearchBox";

export default function Datatable(props: DatetableProps) {
  return (
    <>
      <div className="card">
        {props.header && (
          <div className="card-header">
            <h3 className="card-title">{props.header}</h3>
          </div>
        )}

        <div className="card-body border-bottom py-3">
          <div className="d-flex">
            <DatatablePerPage />
            <DatatableSearchBox />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table card-table table-vcenter text-nowrap datatable">
            <thead>
              <tr>
                {props.columns.map((col, i) => (
                  <th key={i} className={col.className ?? ""}>
                    {col.header ?? col.name ?? ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.rows?.map((row, i) => (
                <tr key={i}>
                  {props.columns.map((col, j) => (
                    <td key={j}>
                      {col.render
                        ? col.render(row, i)
                        : col.name
                        ? row[col.name]
                        : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex align-items-center">
          <DatatablePagination />
        </div>
      </div>
    </>
  );
}
