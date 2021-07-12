import { applyDecorators, Controller } from "@nestjs/common";

/**
 * Custom decorator to handle responses to the api, on a larger scale you could implement guard, headers, interceptor etc.
 * @param {string} name
 * @constructor
 */
export function ResApiController(name: string) {
  return applyDecorators(
    Controller(`api/${name}`)
  )
}
