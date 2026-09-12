/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { IpcMainInvokeEvent } from "electron";

export async function fetchAttachment(_: IpcMainInvokeEvent, url: string) {
    const res = await fetch(url);
    return { bytes: await res.bytes(), type: res.headers.get("content-type")! };
}
