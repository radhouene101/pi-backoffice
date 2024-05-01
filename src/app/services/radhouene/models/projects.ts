/* tslint:disable */
/* eslint-disable */
import { CategoryProjects } from '../models/category-projects';
import { Contest } from '../models/contest';
import { Option } from '../models/option';
import { User } from '../models/user';
export interface Projects {
  category?: CategoryProjects;
  classe?: string;
  coach?: string;
  contest?: Contest;
  date?: string;
  groupName?: string;
  groupStreak?: number;
  id?: number;
  name?: string;
  niveau?: 'PREMIERE' | 'DEUXIEME' | 'TROIXIEME' | 'QUATRIEME' | 'CINQUEME';
  nominated?: boolean;
  numberOfVotes?: number;
  optionSpeciality?: Option;
  scolarYear?: string;
  user?: User;
  votingpool?: boolean;
  winner?: boolean;
}
