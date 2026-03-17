# API Overview

Core public API surfaces in `stommobs`:

- `codes.bed.minestom.mobs.StomMobs` - convenience bootstrapping and vanilla profile registration
- `codes.bed.minestom.mobs.spawn.MobSpawner` - profile registry, spawning, follow destinations, lifecycle binding
- `codes.bed.minestom.mobs.api.MobProfile` - immutable mob definition
- `codes.bed.minestom.mobs.api.MobStats` - level-scaled combat/movement attributes
- `codes.bed.minestom.mobs.builder.MobProfileBuilder` - Java profile builder API
- `codes.bed.minestom.mobs.builder.MobSpawnBuilder` - Java spawn builder API
- `codes.bed.minestom.mobs.dsl.mobProfile`, `spawnMob`, and `spawnDsl` - Kotlin DSL entrypoints
- `codes.bed.minestom.mobs.ai.pathfinding.PathingPresets` - reusable Minestom pathfinding presets
- `codes.bed.minestom.mobs.egg.MobSpawnEggs` - profile-based spawn egg utilities

Common ergonomic entrypoints:

- `StomMobs.createSpawner(node)` for empty setup
- `StomMobs.spawnerWithVanillaProfiles(node)` for preloaded vanilla profiles
- `MobSpawner.spawnAt(...)` coordinate helpers for Java/Kotlin
- `MobSpawner.followPlayer(...)` and `MobSpawner.followBlock(...)` convenience follow wrappers
- `MobSpawner.getActiveMobs(instance)` to filter tracked mobs per instance

All public classes and methods include KDoc in source for IDE hover documentation.

