class AppConfig {
  private static instance: AppConfig | null = null;

  private constructor(public readonly environment: string) {}

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig("development");
    }
    return AppConfig.instance;
  }
}

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

console.log("config1 === config2:", config1 === config2);
console.log("environment:", config1.environment);
