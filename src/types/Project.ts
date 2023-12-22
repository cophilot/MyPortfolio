export default class Project {
	readonly name: string;
	readonly description: string;
	readonly url: string;
	readonly topics: string[];
	readonly stars: number;
	readonly homepage: string;
	readonly logo: string;
	readonly logoSmall: string;
	readonly version: string;

	constructor(
		name: string,
		description: string,
		url: string,
		topics: string[],
		stars: number,
		homepage: string,
		logo: string,
		logoSmall: string,
		version: string
	) {
		this.name = name;
		this.description = description;
		this.url = url;
		this.topics = topics;
		this.stars = stars;
		this.homepage = homepage;
		this.logo = logo;
		this.logoSmall = logoSmall;
		this.version = version;
	}

	static fromJson(json: any): Project {
		return new Project(
			json.name,
			json.description,
			json.url,
			json.topics,
			json.stars,
			json.homepage,
			json.logo_url,
			json.logo_small_url,
			json.version
		);
	}

	static getEmptyArray(): Project[] {
		return [];
	}
}
