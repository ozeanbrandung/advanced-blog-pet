import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfig} from "webpack-dev-server";
import path from "path";

export default function buildDevServer(options: BuildOptions):DevServerConfig {
    return {
        // static: {
        //     directory: options.paths.static,
        // },
        port: options.port,
        open: true,
    }
}
