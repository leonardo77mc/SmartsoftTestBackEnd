import { ResApiController } from "../../utils/decorators/api/api.decorator";
import { TableDataOneService } from "../../services/table-data/table-data-one.service";
import { TableDataTwoService } from "../../services/table-data/table-data-two.service";
import { TableDataThreeService } from "../../services/table-data/table-data-three.service";
import { Body, Delete, Get, Post, Put } from "@nestjs/common";
import { TableDataOneEntity } from "../../repositories/table-data/table-data-one.entity";
import { TableDataTwoEntity } from "../../repositories/table-data/table-data-two.entity";
import { TableDataThreeEntity } from "../../repositories/table-data/table-data-three.entity";
import { DataOneDto } from "../../validations/table-data/table-data-one.dto";
import { DataTwoDto } from "../../validations/table-data/table-data-two.dto";
import { DataThreeDto } from "../../validations/table-data/table-data.three.dto";

@ResApiController("table-data")
export class TableDataController {

  constructor(
    private _tableDataServiceOne: TableDataOneService,
    private _tableDataServiceTwo: TableDataTwoService,
    private _tableDataServiceThree: TableDataThreeService
  ) {
  }

  // Data table one.
  @Post("post-data-one")
  async postDataOne(@Body() dataOneDto: DataOneDto) {

    let save = null;
    let message = "";

    try {
      save = await this._tableDataServiceOne.post(dataOneDto);
    } catch (e) {
      message = "Error los datos en la tabla";
      console.error("Error to save data in the table:", e.message);
    }

    return { data: save, message };
  }

  @Put("put-data-one")
  async putDataOne(@Body() dataOneDto: DataOneDto) {

    let update = null;
    let message = "";

    const tableDataOne: TableDataOneEntity = new TableDataOneEntity();
    tableDataOne.T1C1 = dataOneDto.T1C1;
    tableDataOne.T1C2 = dataOneDto.T1C2;
    tableDataOne.T1C3 = dataOneDto.T1C3;
    tableDataOne.T1C4 = dataOneDto.T1C4;

    try {
      update = await this._tableDataServiceOne.put(tableDataOne);
    } catch (e) {
      message = "Error al actualizar la tabla 1";
      console.error("Error to update TableData1:", e.message);
    }

    return { data: update, message };
  }

  @Get("get-data-one")
  async getTableDataOne() {
    let data: TableDataOneEntity[] = [];
    try {
      data = await this._tableDataServiceOne.get();
    } catch (e) {
      console.error("Error to query data in TableData 3:", e.message);
    }
    return data;
  }

  @Delete("delete-data-one")
  deleteTableDataOne() {

  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // Data table two.
  @Post("post-data-two")
  async postDataTwo(@Body() dataTwoDto: DataTwoDto) {
    let save = null;
    let message = "";

    try {
      save = await this._tableDataServiceTwo.post(dataTwoDto);
    } catch (e) {
      message = "Error los datos en la tabla";
      console.error("Error to save data in the table:", e.message);
    }

    return { data: save, message };
  }

  @Put("put-data-two")
  async putDataTwo(@Body() dataTwoDto: DataTwoDto) {
    let update = null;
    let message = "";

    const tableDataTwo: TableDataTwoEntity = new TableDataTwoEntity();
    tableDataTwo.T2C1 = dataTwoDto.T2C1;
    tableDataTwo.T2C2 = dataTwoDto.T2C2;
    tableDataTwo.T2C3 = dataTwoDto.T2C3;
    tableDataTwo.T2C4 = dataTwoDto.T2C4;
    tableDataTwo.T2C5 = dataTwoDto.T2C5;

    try {
      update = await this._tableDataServiceTwo.put(tableDataTwo);
    } catch (e) {
      message = "Error al actualizar la tabla 1";
      console.error("Error to update TableData1:", e.message);
    }

    return { data: update, message };
  }

  @Get("get-data-two")
  async getTableDataTwo() {
    let data: TableDataTwoEntity[] = [];
    try {
      data = await this._tableDataServiceTwo.get();
    } catch (e) {
      console.error("Error to query data in TableData 3:", e.message);
    }
    return data;
  }

  @Delete("delete-data-one")
  deleteTableDataTwo() {

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // Data table three.
  @Post("post-data-three")
  async postDataThree(@Body() dataThreeDto: DataThreeDto) {

    let save = null;
    let message = "";
    try {
      save = await this._tableDataServiceThree.post(dataThreeDto);
    } catch (e) {
      message = "Error los datos en la tabla";
      console.error("Error to save data in the table:", e.message);
    }
    return { data: save, message };
  }

  @Put("put-data-three")
  async putDataThree(@Body() dataThreeDto: DataThreeDto) {
    let update = null;
    let message = "";

    const tableDataThree: TableDataThreeEntity = new TableDataThreeEntity();
    tableDataThree.T3C1 = dataThreeDto.T3C1;
    tableDataThree.T3C2 = dataThreeDto.T3C2;
    tableDataThree.T3C3 = dataThreeDto.T3C3;

    try {
      update = await this._tableDataServiceThree.put(tableDataThree);
    } catch (e) {
      message = "Error al actualizar la tabla 1";
      console.error("Error to update TableData1:", e.message);
    }

    return { data: update, message };
  }

  @Get("get-data-three")
  async getTableDataThree() {
    let data: TableDataThreeEntity[] = [];
    try {
      data = await this._tableDataServiceThree.get();
    } catch (e) {
      console.error("Error to query data in TableData 3:", e.message);
    }
    return data;
  }

  @Delete("delete-data-one")
  deleteTableDataThree() {

  }


}