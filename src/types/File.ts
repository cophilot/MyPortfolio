import Entry from './Entry';

export default class File extends Entry {
	content: string;

	constructor(name: string, content: string) {
		super(name);
		this.content = content;
	}
}
