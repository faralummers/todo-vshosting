import { IHttpActionErrorProps } from "../interfaces/http.interface";
import { props } from "@ngrx/store";

export namespace HttpMetaUtils {
  export const errorProps = props<IHttpActionErrorProps>();
}
