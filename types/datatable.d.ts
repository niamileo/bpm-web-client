type DatatableColumnProps = {
  header?: string; //   also can be a function
  name?: string;
  className?: string;
  render?: (row?: object, index?: number) => JSX.Element;
};

interface DatetableProps {
  columns: DatatableColumnProps[];
  rows: any[];
  header?: string;
}
