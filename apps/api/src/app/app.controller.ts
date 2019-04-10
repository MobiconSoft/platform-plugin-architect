import { Controller, Get } from "@nestjs/common";

import { Message } from "@jm/api-interface";
import { AppService } from "./app.service";

const path = require('path');
const fs = require('fs-extra');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  getData(): Message {
    return this.appService.getData();
  }

  @Get("plugin2")
  getPlugin2() {
    const fileName = path.join(process.cwd(), 'dist/apps/api/plugin2.js');
    const plugin2 = fs.readFileSync(fileName, 'utf8');
    return plugin2;
  }
}
