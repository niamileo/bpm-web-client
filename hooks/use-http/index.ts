import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useHttp<t>(
  axiosService: (params?: any) => Promise<AxiosResponse>,
  options: any = {}
) {
  const { onMount = true, ...serviceParams } = options;

  const [data, setData] = useState<t>();

  const execute = () => {
    axiosService(serviceParams)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (onMount) {
      execute();
    }
  }, []);

  return { data, execute };
}
