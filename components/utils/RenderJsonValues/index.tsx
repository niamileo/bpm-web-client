type RenderJsonValues = {
  values: any;
};

export default function RenderJsonValues({ values }: RenderJsonValues) {
  return (
    <pre style={{ textAlign: "left", direction: "ltr" }}>
      {JSON.stringify(values, null, 2)}
    </pre>
  );
}
