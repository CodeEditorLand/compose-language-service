/*!--------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { ClientCapabilities } from "vscode-languageserver-protocol";

import type { AlternateYamlLanguageServiceClientCapabilities } from "./AlternateYamlLanguageServiceClientCapabilities";
import type { DocumentSettingsClientCapabilities } from "./DocumentSettings";

export type ComposeLanguageClientCapabilities = Omit<
	ClientCapabilities,
	"experimental"
> & {
	readonly experimental?: {
		readonly documentSettings?: DocumentSettingsClientCapabilities;

		readonly alternateYamlLanguageService?: AlternateYamlLanguageServiceClientCapabilities;
	};
};
