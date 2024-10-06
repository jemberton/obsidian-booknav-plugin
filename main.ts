import { Plugin, MarkdownRenderChild, MarkdownRenderer } from 'obsidian';

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
				if (link.innerHTML.endsWith('prev')) {
					let title = "";
					if (link.innerHTML === "prev") {
						title = link.getAttribute('data-href') || 'Previous';
					} else {
						title = link.innerHTML.replace(/\|\s*prev/g, '')
					}
					// link.innerHTML = title;
					link.addClass('prev');
					link.innerHTML = `<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left"><path d="M18 15h-6v4l-7-7 7-7v4h6v6z"/></svg></span><span class="title">${ title }</span>`
				} else if (link.innerHTML.endsWith('next')) {
					let title = "";
					if (link.innerHTML === "next") {
						title = link.getAttribute('data-href') || 'Next';
					} else {
						title = link.innerHTML.replace(/\|\s*next/g, '')
					}
					// link.innerHTML = title;
					link.addClass('next');
					link.innerHTML = `<span class="title">${ title }</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-right"><path d="M6 9h6V5l7 7-7 7v-4H6V9z"/></svg></span>`
				} else if (link.innerHTML.endsWith('center')) {
					let title = "";
					if (link.innerHTML === "center") {
						title = link.getAttribute('data-href') || '';
					} else {
						title = link.innerHTML.replace(/\|\s*center/g, '')
					}
					link.innerHTML = title;
					link.addClass('center');
				}
			}
		});
	}

	onunload() {
		console.log("BookNav plugin unloaded");
	}
}
