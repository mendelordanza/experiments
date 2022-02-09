import { injectable, inject } from 'inversify';
import R from 'ramda';
import {
  ID,
  Project,
  InputData,
} from '../../../types';
import { FilterQuery } from '../../../library/repository';
import { TYPES } from '../types';
import ProjectRepository from '../repositories/project';

@injectable()
export default class ProjectController {
  @inject(TYPES.ProjectRepository) private readonly projectRepository!: ProjectRepository;

  async projectExists(params: { filter: FilterQuery<Project> }): Promise<Boolean> {
    return this.projectRepository.exists(params);
  }

  async createProject(params: { id: ID } & InputData<Pick<Project, 'name' | 'description' | 'contractAddress' |
  'discordId' | 'discordChannel'>>): Promise<Project> {
    const document = await this.projectRepository.create(params);

    return {
      ...document,
    };
  }

  async findOneProject(params: { id: ID }): Promise<Project | null>;

  async findOneProject(params: { filter: FilterQuery<Project> }): Promise<Project | null>;

  async findOneProject(params: { id?: ID; filter?: FilterQuery<Project> }): Promise<Project | null> {
    const document = await this.projectRepository.findOne(params as never);

    if (!document) {
      return null;
    }

    return {
      ...document,
    };
  }

  async findProjects(
    params: { filter: FilterQuery<Project> },
  ): Promise<Project[]> {
    return R.map((item) => ({
      ...item,
    }), await this.projectRepository.find(params));
  }
}