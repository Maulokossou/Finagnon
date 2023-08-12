import {url,key} from '../../film';
import { createClient } from "@supabase/supabase-js";
export const supabase= createClient(url,key)

