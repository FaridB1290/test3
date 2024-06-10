/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CommerceService } from "../commerce.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CommerceCreateInput } from "./CommerceCreateInput";
import { Commerce } from "./Commerce";
import { CommerceFindManyArgs } from "./CommerceFindManyArgs";
import { CommerceWhereUniqueInput } from "./CommerceWhereUniqueInput";
import { CommerceUpdateInput } from "./CommerceUpdateInput";
import { FeedbackFindManyArgs } from "../../feedback/base/FeedbackFindManyArgs";
import { Feedback } from "../../feedback/base/Feedback";
import { FeedbackWhereUniqueInput } from "../../feedback/base/FeedbackWhereUniqueInput";
import { PanierMystereFindManyArgs } from "../../panierMystere/base/PanierMystereFindManyArgs";
import { PanierMystere } from "../../panierMystere/base/PanierMystere";
import { PanierMystereWhereUniqueInput } from "../../panierMystere/base/PanierMystereWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CommerceControllerBase {
  constructor(
    protected readonly service: CommerceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Commerce })
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCommerce(
    @common.Body() data: CommerceCreateInput
  ): Promise<Commerce> {
    return await this.service.createCommerce({
      data: {
        ...data,

        utilisateur: data.utilisateur
          ? {
              connect: data.utilisateur,
            }
          : undefined,
      },
      select: {
        adresse: true,
        createdAt: true,
        id: true,
        nom: true,
        nomJuridique: true,
        numTva: true,
        typeField: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Commerce] })
  @ApiNestedQuery(CommerceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async commerceItems(@common.Req() request: Request): Promise<Commerce[]> {
    const args = plainToClass(CommerceFindManyArgs, request.query);
    return this.service.commerceItems({
      ...args,
      select: {
        adresse: true,
        createdAt: true,
        id: true,
        nom: true,
        nomJuridique: true,
        numTva: true,
        typeField: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Commerce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async commerce(
    @common.Param() params: CommerceWhereUniqueInput
  ): Promise<Commerce | null> {
    const result = await this.service.commerce({
      where: params,
      select: {
        adresse: true,
        createdAt: true,
        id: true,
        nom: true,
        nomJuridique: true,
        numTva: true,
        typeField: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Commerce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCommerce(
    @common.Param() params: CommerceWhereUniqueInput,
    @common.Body() data: CommerceUpdateInput
  ): Promise<Commerce | null> {
    try {
      return await this.service.updateCommerce({
        where: params,
        data: {
          ...data,

          utilisateur: data.utilisateur
            ? {
                connect: data.utilisateur,
              }
            : undefined,
        },
        select: {
          adresse: true,
          createdAt: true,
          id: true,
          nom: true,
          nomJuridique: true,
          numTva: true,
          typeField: true,
          updatedAt: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Commerce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCommerce(
    @common.Param() params: CommerceWhereUniqueInput
  ): Promise<Commerce | null> {
    try {
      return await this.service.deleteCommerce({
        where: params,
        select: {
          adresse: true,
          createdAt: true,
          id: true,
          nom: true,
          nomJuridique: true,
          numTva: true,
          typeField: true,
          updatedAt: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/feedbacks")
  @ApiNestedQuery(FeedbackFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Feedback",
    action: "read",
    possession: "any",
  })
  async findFeedbacks(
    @common.Req() request: Request,
    @common.Param() params: CommerceWhereUniqueInput
  ): Promise<Feedback[]> {
    const query = plainToClass(FeedbackFindManyArgs, request.query);
    const results = await this.service.findFeedbacks(params.id, {
      ...query,
      select: {
        clientAdresse: true,
        clientEmail: true,
        clientNom: true,

        commerce: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        id: true,
        message: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "update",
    possession: "any",
  })
  async connectFeedbacks(
    @common.Param() params: CommerceWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        connect: body,
      },
    };
    await this.service.updateCommerce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "update",
    possession: "any",
  })
  async updateFeedbacks(
    @common.Param() params: CommerceWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        set: body,
      },
    };
    await this.service.updateCommerce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/feedbacks")
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "update",
    possession: "any",
  })
  async disconnectFeedbacks(
    @common.Param() params: CommerceWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        disconnect: body,
      },
    };
    await this.service.updateCommerce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/panierMysteres")
  @ApiNestedQuery(PanierMystereFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PanierMystere",
    action: "read",
    possession: "any",
  })
  async findPanierMysteres(
    @common.Req() request: Request,
    @common.Param() params: CommerceWhereUniqueInput
  ): Promise<PanierMystere[]> {
    const query = plainToClass(PanierMystereFindManyArgs, request.query);
    const results = await this.service.findPanierMysteres(params.id, {
      ...query,
      select: {
        commerce: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        etat: true,
        id: true,
        nom: true,
        prix: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/panierMysteres")
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "update",
    possession: "any",
  })
  async connectPanierMysteres(
    @common.Param() params: CommerceWhereUniqueInput,
    @common.Body() body: PanierMystereWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      panierMysteres: {
        connect: body,
      },
    };
    await this.service.updateCommerce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/panierMysteres")
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "update",
    possession: "any",
  })
  async updatePanierMysteres(
    @common.Param() params: CommerceWhereUniqueInput,
    @common.Body() body: PanierMystereWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      panierMysteres: {
        set: body,
      },
    };
    await this.service.updateCommerce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/panierMysteres")
  @nestAccessControl.UseRoles({
    resource: "Commerce",
    action: "update",
    possession: "any",
  })
  async disconnectPanierMysteres(
    @common.Param() params: CommerceWhereUniqueInput,
    @common.Body() body: PanierMystereWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      panierMysteres: {
        disconnect: body,
      },
    };
    await this.service.updateCommerce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/commerces/:id")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetCommerceDetails(
    @common.Body()
    body: CommerceUpdateInput
  ): Promise<string> {
    return this.service.GetCommerceDetails(body);
  }

  @common.Get("/commerces")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetCommerces(
    @common.Body()
    body: CommerceUpdateInput
  ): Promise<string[]> {
    return this.service.GetCommerces(body);
  }

  @common.Get("/:id/update-commerce-details")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateCommerceDetails(
    @common.Body()
    body: CommerceUpdateInput
  ): Promise<string> {
    return this.service.UpdateCommerceDetails(body);
  }

  @common.Put("/commerces/:id")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateCommerceInfo(
    @common.Body()
    body: CommerceUpdateInput
  ): Promise<string> {
    return this.service.UpdateCommerceInfo(body);
  }

  @common.Put("/commerces/:id")
  @swagger.ApiOkResponse({
    type: Commerce,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateCommerceInformationCorrected(
    @common.Body()
    body: CommerceUpdateInput
  ): Promise<Commerce> {
    return this.service.UpdateCommerceInformationCorrected(body);
  }

  @common.Put("/commerces/:id")
  @swagger.ApiOkResponse({
    type: Commerce,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async UpdateCommerceInformationDetail(
    @common.Body()
    body: CommerceUpdateInput
  ): Promise<Commerce> {
    return this.service.UpdateCommerceInformationDetail(body);
  }
}
