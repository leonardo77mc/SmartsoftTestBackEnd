import { applyDecorators, Controller } from "@nestjs/common";


export function ResApiController(name: string) {
  return applyDecorators(
    Controller(`api/${name}`)
  )
}
