import { Ref } from "vue";

export type ExtractRefValue<T> = T extends Ref<infer TVal> ? TVal : never;
