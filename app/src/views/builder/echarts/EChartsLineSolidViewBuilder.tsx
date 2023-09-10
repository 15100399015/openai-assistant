/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import { TooltipComponentOption } from "echarts";
import { SolidViewDataType } from "@/types/solid";
import { genId } from "@/utils";
import EChartsBaseViewBuilder from "./EChartsBaseViewBuilder";
import { ViewCategory, ViewType } from "../SolidViewBuilder";
import EChartsLineSolidView from "../../echarts/EChartsLineSolidView";

export default class EChartsBarSolidViewBuilder extends EChartsBaseViewBuilder {
  createModel(): any {
    const viewModel: SolidViewDataType = {
      id: genId(),
      title: "line",
      type: "echarts_line",
      position: {
        top: 0,
        left: 0,
      },
      size: {
        width: 560,
        height: 250,
      },
      frame: {
        backgroundColor: "#333",
        translate: [0, 0],
        rotate: 0,
      },
      data: {
        id: "",
        title: "",
        remote: false,
        dataset: [
          ["name", "pjsf", "pjhf", "cc"],
          ["guomu", 9204.65, 1930.94, 1400],
          ["miaomu", 9312.02, 2059.42, 902],
          ["shucai", 20857.99, 7482.28, 5502],
        ],
        xs: [
          {
            label: "name",
          },
        ],
        ys: [
          {
            label: "pjsf",
          },
          {
            label: "pjhf",
          },
          {
            label: "cc",
          },
        ],
      },
    };

    const defaultOptions = {
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      } as TooltipComponentOption,
    };

    const viewStyle = {
      position: "absolute",
      background: "#fff",
      overflow: "hidden",
      border: "1px solid #f1f1f1",
    } as React.CSSProperties;

    viewModel.style = viewStyle;

    return { ...viewModel, option: defaultOptions };
  }

  getFrame(): any {
    return {
      translate: [0, 0],
      transformOrigin: "50% 50%",
      rotate: 0,
    };
  }

  getComponentType(): any {
    return EChartsLineSolidView;
  }

  getCategory(): ViewCategory {
    return {
      key: "echarts",
      title: "ECharts",
    };
  }

  getDescription(): string {
    return "";
  }

  getIcon(): string {
    return "";
  }

  getTitle(): string {
    return "Line Chart";
  }

  getType(): ViewType {
    return "echarts_line";
  }

  getId(): string {
    return "echarts_line";
  }

  getImage(): string {
    return "";
  }
}
