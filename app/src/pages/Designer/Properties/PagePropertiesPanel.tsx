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
import usePageProperties from "./usePageProperties";
import PagePagePropertiesPanel from "./page/PagePagePropertiesPanel";
import PageModeluiPropertiesPanel from "./page/PageModeluiDialogPanel";

export default function PagePropertiesPanel() {
	const { currentTabKey, mainRef, renderTabs } = usePageProperties({
		tabs: [
			{
				key: "Page",
				tab: "Page",
			},
			{
				key: "Modelui",
				tab: "Modelui",
			},
		],
	});

	function renderPanel() {
		if (currentTabKey === "Page") {
			return <PagePagePropertiesPanel />;
		}
		if (currentTabKey === "Modelui") {
			return <PageModeluiPropertiesPanel />;
		}
		return undefined;
	}

	return (
		<>
			<header className="conf-header">{renderTabs()}</header>
			<main className="conf-main" ref={mainRef}>
				{renderPanel()}
			</main>
		</>
	);
}
