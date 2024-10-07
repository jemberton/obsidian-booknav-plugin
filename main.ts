import { Plugin, MarkdownRenderChild, MarkdownRenderer, setIcon } from 'obsidian';

export default class BookNav extends Plugin {
	async onload() {
		console.log('BookNav plugin loaded');

		this.registerMarkdownCodeBlockProcessor("booknav", async (source, el, ctx) => {
			const block = el.createDiv("booknav");
			const renderedEl = new MarkdownRenderChild(block);
			await MarkdownRenderer.render(this.app, source, block, ctx.sourcePath, renderedEl);
		});

		this.registerMarkdownPostProcessor((el, ctx) => {
			const links = el.findAll('.booknav a');

			for (const link of links) {
				switch (link.textContent) {
					case "prev": {
						const linkText: string = link.getAttr("data-href") || "Previous";
						link.firstChild?.remove();
						link.addClass('prev');
						const icon = link.createSpan({ cls: "icon" });
						setIcon(icon, "arrow-big-left");
						link.createSpan({ text: linkText, cls: "title" });
						break;
					}
					case "next": {
						const linkText: string = link.getAttr("data-href") || "Next";
						link.firstChild?.remove();
						link.addClass('next');
						link.createSpan({ text: linkText, cls: "title" });
						const icon = link.createSpan({ cls: "icon" });
						setIcon(icon, "arrow-big-right");
						break;
					}
					case "center": {
						const linkText: string = link.getAttr("data-href") || "";
						link.firstChild?.remove();
						link.addClass('center');
						link.createSpan({ text: linkText, cls: "title" });
						break;
					}
					default: {
						if (link.textContent?.endsWith("prev")) {
							const linkText: string = link.textContent.replace(/\|\s*prev/g, '');
							link.firstChild?.remove();
							link.addClass('prev');
							const icon = link.createSpan({ cls: "icon" });
							setIcon(icon, "arrow-big-left");
							link.createSpan({ text: linkText, cls: "title" });
						} else if (link.textContent?.endsWith('next')) {
							const linkText: string = link.textContent.replace(/\|\s*next/g, '');
							link.firstChild?.remove();
							link.addClass('next');
							link.createSpan({ text: linkText, cls: "title" });
							const icon = link.createSpan({ cls: "icon" });
							setIcon(icon, "arrow-big-right");
						} else if (link.textContent?.endsWith('center')) {
							const linkText: string = link.textContent.replace(/\|\s*center/g, '');
							link.firstChild?.remove();
							link.addClass('center');
							link.createSpan({ text: linkText, cls: "title" });
						}
						break;
					}
				}
			}
		});
	}

	onunload() {
		console.log("BookNav plugin unloaded");
	}
}
