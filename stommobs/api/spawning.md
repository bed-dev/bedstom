# Spawning API

## Bootstrapped Spawner

::: code-group

```kotlin [Kotlin]
val spawner = StomMobs.spawnerWithVanillaProfiles(node)
```

```java [Java]
MobSpawner spawner = StomMobs.spawnerWithVanillaProfiles(node);
```

:::

This creates a `MobSpawner`, registers built-in vanilla profiles, and binds lifecycle listeners.

## Spawn by Profile Id

::: code-group

```kotlin [Kotlin]
spawner.spawnAt("vanilla:zombie", instance, 0.0, 42.0, 0.0, level = 6)
```

```java [Java]
spawner.spawnAt("vanilla:zombie", instance, 0, 42, 0, 6);
```

:::

## Spawn by Profile Object

::: code-group

```kotlin [Kotlin]
val profile: codes.bed.minestom.mobs.api.MobProfile = TODO()
spawner.spawnAt(profile, instance, 5.0, 42.0, 5.0, level = 4)
```

```java [Java]
MobProfile profile = ...; // obtain profile
spawner.spawnAt(profile, instance, 5, 42, 5, 4);
```

:::

## Destination Following

You can set a destination block or a player to follow automatically.

::: code-group

```kotlin [Kotlin]
val mob = spawner.spawnAt("vanilla:zombie", instance, 0.0, 42.0, 0.0, level = 1)

// Follow a fixed block position
spawner.setDestinationBlock(mob, Pos(30.0, 42.0, 30.0))

// Follow a player destination
spawner.setPlayerDestination(mob, player)

// Stop destination-follow behavior
spawner.clearDestination(mob)
```

```java [Java]
var mob = spawner.spawnAt("vanilla:zombie", instance, 0, 42, 0, 1);

// Follow a fixed block position
spawner.setDestinationBlock(mob, new Pos(30, 42, 30));

// Follow a player destination
spawner.setPlayerDestination(mob, player);

// Stop destination-follow behavior
spawner.clearDestination(mob);
```

:::

## Advanced Spawning

Use builders or DSL for more control over the spawn event (e.g. equipment, metadata).

::: code-group

```java [Java Builder]
MobSpawnBuilder.create(spawner)
    .profileId("vanilla:villager")
    .instance(instance)
    .position(new Pos(4, 42, 4))
    .level(2)
    .spawn();
```

```kotlin [Kotlin DSL]
import codes.bed.minestom.mobs.dsl.*

spawnMob(spawner, "vanilla:villager") {
    instance(instance)
    position(Pos(4.0, 42.0, 4.0))
    // can configure entity meta or equipment here if supported
}
```

:::

## Interactive Spawning

You can also use spawn eggs to let players spawn mobs manually.

See [Spawn Eggs API](/stommobs/api/spawn-eggs) for details.

## Kotlin Spawn DSL

```kotlin
spawner.spawnMob {
    profileId = "vanilla:sheep"
    this.instance = instance
    position = Pos(8.0, 42.0, 8.0)
    level = 2
}
```

