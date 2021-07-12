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
import { IResponseGeneryInterface, IResponseTables } from "../../interfaces/response-genery.interface";
import { AnswersEnum } from "../../utils/enums/answers.enum";

@ResApiController("table-data")
export class TableDataController {

  constructor(
    private _tableDataServiceOne: TableDataOneService,
    private _tableDataServiceTwo: TableDataTwoService,
    private _tableDataServiceThree: TableDataThreeService
  ) {
  }

  /**
   * Method to save data in the tableData1.
   * @param {dataOneDto}
   * @return {Promise}
   */
  @Post("post-data-one")
  async postDataOne(@Body() dataOneDto: DataOneDto): Promise<IResponseGeneryInterface<TableDataOneEntity>> {

    let save = null;
    let message = AnswersEnum.success;

    try {
      save = await this._tableDataServiceOne.post(dataOneDto);
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_save_table, e.message);
    }

    return { data: save, message };
  }

  /**
   * Method to update data in the tableData1.
   * @param dataOneDto
   * @return {Promise}
   */
  @Put("put-data-one")
  async putDataOne(@Body() dataOneDto: DataOneDto): Promise<IResponseGeneryInterface<DataOneDto>> {

    let update = null;
    let message = AnswersEnum.success;

    const tableDataOne: TableDataOneEntity = new TableDataOneEntity();
    tableDataOne.T1C1 = dataOneDto.T1C1;
    tableDataOne.T1C2 = dataOneDto.T1C2;
    tableDataOne.T1C3 = dataOneDto.T1C3;
    tableDataOne.T1C4 = dataOneDto.T1C4;

    try {
      update = await this._tableDataServiceOne.put(tableDataOne);
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_update_table, e.message);
    }

    return { data: update, message };
  }


  /**
   * Method to get data in the tableData1.
   * @return {Promise}
   */
  @Get("get-data-one")
  async getTableDataOne(): Promise<IResponseTables<TableDataOneEntity>> {

    let data: TableDataOneEntity[] = [];
    let message = AnswersEnum.success;

    try {
      data = await this._tableDataServiceOne.get();
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_query_table_data, e.message);
    }
    return { data, message };
  }

  /**
   * Method to delete data in the tableData1.
   * @return {void}
   */
  @Delete("delete-data-one")
  deleteTableDataOne() {

  }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  /**
   * Method to save data in the tableData2.
   * @param {dataTwoDto}
   * @return {Promise}
   */
  @Post("post-data-two")
  async postDataTwo(@Body() dataTwoDto: DataTwoDto): Promise<IResponseGeneryInterface<TableDataTwoEntity[]>> {

    let save = null;
    let message = AnswersEnum.success;

    try {
      save = await this._tableDataServiceTwo.post(dataTwoDto);
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_save_table, e.message);
    }

    return { data: save, message };
  }

  /**
   * Method to update data in the tableData2.
   * @param {dataTwoDto}
   * @return {Promise}
   */
  @Put("put-data-two")
  async putDataTwo(@Body() dataTwoDto: DataTwoDto): Promise<IResponseGeneryInterface<DataTwoDto>> {

    let update = null;
    let message = AnswersEnum.success;

    const tableDataTwo: TableDataTwoEntity = new TableDataTwoEntity();
    tableDataTwo.T2C1 = dataTwoDto.T2C1;
    tableDataTwo.T2C2 = dataTwoDto.T2C2;
    tableDataTwo.T2C3 = dataTwoDto.T2C3;
    tableDataTwo.T2C4 = dataTwoDto.T2C4;
    tableDataTwo.T2C5 = dataTwoDto.T2C5;

    try {
      update = await this._tableDataServiceTwo.put(tableDataTwo);
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_update_table, e.message);
    }

    return { data: update, message };
  }

  /**
   * Method to get data in the tableData2.
   * @return {Promise}
   */
  @Get("get-data-two")
  async getTableDataTwo(): Promise<IResponseTables<TableDataTwoEntity>> {

    let data: TableDataTwoEntity[] = [];
    let message = AnswersEnum.success;

    try {
      data = await this._tableDataServiceTwo.get();
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_query_table_data, e.message);
    }
    return { data, message };
  }

  /**
   * Method to delete data in the tableData2.
   * @return {void}
   */
  @Delete("delete-data-one")
  deleteTableDataTwo() {

  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  /**
   * Method to save data in the tableData3.
   * @param {dataThreeDto}
   * @return {Promise}
   */
  @Post("post-data-three")
  async postDataThree(@Body() dataThreeDto: DataThreeDto): Promise<IResponseGeneryInterface<TableDataThreeEntity[]>> {

    let save = null;
    let message = AnswersEnum.success;
    try {
      save = await this._tableDataServiceThree.post(dataThreeDto);
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_save_table, e.message);
    }
    return { data: save, message };
  }

  /**
   * Method to update data in the tableData3.
   * @param {dataThreeDto}
   * @return {Promise}
   */
  @Put("put-data-three")
  async putDataThree(@Body() dataThreeDto: DataThreeDto): Promise<IResponseGeneryInterface<DataThreeDto>> {

    let update = null;
    let message = AnswersEnum.success;

    const tableDataThree: TableDataThreeEntity = new TableDataThreeEntity();
    tableDataThree.T3C1 = dataThreeDto.T3C1;
    tableDataThree.T3C2 = dataThreeDto.T3C2;
    tableDataThree.T3C3 = dataThreeDto.T3C3;

    try {
      update = await this._tableDataServiceThree.put(tableDataThree);
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_update_table, e.message);
    }

    return { data: update, message };
  }

  /**
   * Method to get data in the tableData3.
   * @return {Promise}
   */
  @Get("get-data-three")
  async getTableDataThree(): Promise<IResponseTables<TableDataThreeEntity>> {

    let data: TableDataThreeEntity[] = [];
    let message = AnswersEnum.success;

    try {
      data = await this._tableDataServiceThree.get();
    } catch (e) {
      message = AnswersEnum.error;
      console.error(global.logYml.error_to_query_table_data, e.message);
    }
    
    return { data, message };
  }

  /**
   * Method to delete data in the tableData3.
   * @return {void}
   */
  @Delete("delete-data-one")
  deleteTableDataThree() {

  }


}