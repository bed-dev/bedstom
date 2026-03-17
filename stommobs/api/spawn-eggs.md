# Spawn Eggs API

`MobSpawnEggs` provides utilities to create standard Minecraft spawn eggs that spawn your custom profiles when used.

## obtaining an Egg

You can retrieve an `ItemStack` that represents a spawn egg for a specific profile.

::: code-group

```kotlin [Kotlin]
import codes.bed.minestom.mobs.egg.MobSpawnEggs

// Get a spawn egg for a vanilla profile
val zombieEgg = MobSpawnEggs.create("vanilla:zombie")

// Get a spawn egg for a custom profile
val customEgg = MobSpawnEggs.create("custom:raider")
```

```java [Java]
import codes.bed.minestom.mobs.egg.MobSpawnEggs;

// Get a spawn egg for a vanilla profile
ItemStack zombieEgg = MobSpawnEggs.create("vanilla:zombie");
```

:::

## Event Handling

For the spawn eggs to work (i.e., actually spawn the mob when a player right-clicks a block), you must register the event listener.
This is done automatically if you use `StomMobs.createSpawner(...)` or `StomMobs.spawnerWithVanillaProfiles(...)`.

If you are manually setting up the spawner, ensure you register the egg handler:

```kotlin
MobSpawnEggs.register(eventNode, spawner)
```

## Behavior

- **Right-Click Block**: Spawns the mob on top of the clicked block.
- **Right-Click Mob**: (Standard Minecraft behavior) Spawns a baby version (if applicable/supported by handler). *Note: Currently strictly spawns a new instance.*
- **Consume**: The egg is consumed from the player's hand (unless in Creative mode).

