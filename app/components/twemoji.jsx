// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206
import React, { memo } from "react";
import twemoji from "twemoji";
import "./twemoji.css";

const Twemoji = ({ text }) => (
	<span
		dangerouslySetInnerHTML={{
			__html: twemoji.parse(text, {
				folder: "svg",
				ext: ".svg",
			}),
		}}
	/>
);

export default memo(Twemoji);
