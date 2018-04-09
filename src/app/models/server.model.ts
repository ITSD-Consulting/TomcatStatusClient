export default interface Server {
		serverIp: string;
		isLinuxServer: boolean;
		scriptFolder: string;
		tomcatList: Tomcat[];
}

export interface Tomcat {
	deploymentPath: string;
	port: string;
	isRunning: boolean;
	version: string;
	modified: string;
}