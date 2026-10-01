export type ReleaseType = 'stable' | 'lts' | 'security' | 'beta';

export interface ChangelogItem {
  category: 'feature' | 'improvement' | 'fix' | 'security' | 'database';
  title: string;
  description: string;
}

export interface ReleaseAsset {
  name: string;
  type: 'installer' | 'portable' | 'patch' | 'database_script';
  size: string;
  downloadUrl: string;
  sha256: string;
  compatibility: string;
}

export interface Release {
  version: string;
  tag: string;
  releaseDate: string;
  isLatest: boolean;
  type: ReleaseType;
  title: string;
  summary: string;
  highlights: string[];
  changelog: ChangelogItem[];
  assets: ReleaseAsset[];
  databaseMigrationRequired: boolean;
  minSupportedPreviousVersion: string;
  breakingChanges?: string[];
}

export interface SystemModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  badge?: string;
  features: string[];
  metrics?: { label: string; value: string }[];
}

export interface CompatibilitySpec {
  component: string;
  minimum: string;
  recommended: string;
  notes: string;
}
