export interface OptionsMap {
    appName: string;
    brokerHostName: string;
    brokerUserName: string;
    brokerPassword: string;
    serviceName: string;
    retryDelay: number;
}

export default interface MessageBus {
    configure(args: OptionsMap): Promise<void>;
    terminate(): Promise<void>;
}
