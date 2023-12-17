import { Controller } from '@nestjs/common';
import { TestTsRestRoute } from '@nx-starter-template/shared-dto-routers';
import {
  NestControllerInterface,
  NestRequestShapes,
  TsRest,
  TsRestRequest,
  nestControllerContract,
} from '@ts-rest/nest';

const c = nestControllerContract(TestTsRestRoute);
type RequestShape = NestRequestShapes<typeof c>;
/**
 * Controller for handling REST requests in the TestTsRest module.
 */
@Controller()
export class TestTsRestController implements NestControllerInterface<typeof c> {
  constructor() {
    console.log('TestTsRest');
  }

  /**
   * Retrieves a message with a personalized greeting.
   * @param displayName - The display name to include in the greeting message.
   * @returns An object containing the HTTP status code and the message body.
   */
  @TsRest(c.getMessage)
  async getMessage(
    @TsRestRequest() { params: { displayName } }: RequestShape['getMessage']
  ) {
    return {
      status: 200 as const,
      body: {
        message: `Hello ${displayName}`,
      },
    };
  }
}
