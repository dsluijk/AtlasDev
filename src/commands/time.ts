import { Command } from '../registery';

/**
 * Time command.
 *
 * Shows the current time.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Time implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'time';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Show the current time.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return new Date().toString();
  }
}
