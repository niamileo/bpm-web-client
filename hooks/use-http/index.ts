import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useHttp(
  axiosService: (params?: Object) => Promise<AxiosResponse>,
  options: any = {},
  defaultValue: Object | Array<any> | null = null
) {
  const [data, setData] = useState(<any>defaultValue);

  const execute = () => {
    axiosService(options)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (defaultValue) {
      execute();
    }
  }, []);

  return { data, execute };
}
